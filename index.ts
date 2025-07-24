import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import * as fs from 'fs';
import * as path from 'path';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// Your database configuration
const databases = [
  { id: '23a809797b428054b927cb695d091115', path: 'source-of-truth/Core', name: 'Core' },
  { id: '238809797b428041b717f6029c3a50a2', path: 'source-of-truth/Annexes/Playbooks', name: 'Playbooks' },
  { id: '238809797b428058ac7bfd6c131c8061', path: 'source-of-truth/Annexes/Protocols', name: 'Protocols' },
  { id: '238809797b42809ea93ce2bd1a8abefa', path: 'source-of-truth/Annexes/Processes', name: 'Processes' },
  { id: '238809797b4280eb8ebedc8831cecb0d', path: 'source-of-truth/Annexes/Debriefs', name: 'Debriefs' },
  { id: '238809797b42803b963fd6dbe278f54b', path: 'source-of-truth/Annexes/Guides', name: 'Guides' },
  { id: '238809797b4280679808c1a4da8fcd2c', path: 'source-of-truth/Annexes/Roadmaps', name: 'Roadmaps' },
  { id: '238809797b42800ea6e4c1bd26f0188c', path: 'source-of-truth/Annexes/References', name: 'References' },
  { id: '238809797b42804f9970fabbd35050fa', path: 'source-of-truth/Annexes/Methodologies', name: 'Methodologies' },
];

async function getPageTitle(page: any): Promise<string> {
  try {
    // Try different property types to find the title
    const properties = page.properties;
    
    // Common title property names
    const titleProps = ['Name', 'Title', 'name', 'title'];
    
    for (const prop of titleProps) {
      if (properties[prop]) {
        const property = properties[prop];
        if (property.type === 'title' && property.title.length > 0) {
          return property.title[0].plain_text;
        }
      }
    }
    
    // If no standard title found, check all properties
    for (const [key, value] of Object.entries(properties)) {
      if (value.type === 'title' && value.title.length > 0) {
        return value.title[0].plain_text;
      }
    }
    
    return 'Untitled';
  } catch (error) {
    console.error('Error getting page title:', error);
    return 'Untitled';
  }
}

async function exportDatabase(database: typeof databases[0]) {
  console.log(`Exporting ${database.name} database...`);
  
  try {
    // Create directory if it doesn't exist
    fs.mkdirSync(database.path, { recursive: true });
    
    // Query all pages in the database
    const response = await notion.databases.query({
      database_id: database.id,
    });
    
    console.log(`Found ${response.results.length} pages in ${database.name}`);
    
    // Process each page
    for (const page of response.results) {
      if ('properties' in page) {
        try {
          const title = await getPageTitle(page);
          const mdblocks = await n2m.pageToMarkdown(page.id);
          const mdString = n2m.toMarkdownString(mdblocks);
          
          // Sanitize filename
          const filename = title === 'Untitled' ? `untitled_${page.id.substring(0, 8)}` : title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
          const filepath = path.join(database.path, `${filename}.md`);
          
          // Add front matter
          const content = `---
title: ${title}
database: ${database.name}
notion_id: ${page.id}
last_updated: ${new Date().toISOString()}
---

# ${title}

${mdString.parent}`;
          
          fs.writeFileSync(filepath, content);
          console.log(`  ✓ Exported: ${title}`);
        } catch (error) {
          console.error(`  ✗ Error exporting page ${page.id}:`, error);
        }
      }
    }
    
    console.log(`✓ Completed ${database.name} export\n`);
  } catch (error) {
    console.error(`✗ Error querying ${database.name} database:`, error);
  }
}

async function main() {
  console.log('Starting Notion backup...\n');
  
  if (!process.env.NOTION_TOKEN) {
    console.error('NOTION_TOKEN environment variable is not set!');
    process.exit(1);
  }
  
  // Export all databases
  for (const database of databases) {
    await exportDatabase(database);
  }
  
  console.log('Backup complete!');
}

main().catch(console.error);
