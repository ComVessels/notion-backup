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
  { id: '240809797b4280d5a957dbe5c8a57b6d', path: 'Source-of-Truth/Core/Core-Documents', name: 'Core Documents' },
  { id: '240809797b4280698a27dd07fb6c4e42', path: 'Source-of-Truth/Annexes/Playbooks', name: 'Playbooks' },
  { id: '240809797b428040ab5af6702e88a1d6', path: 'Source-of-Truth/Annexes/Protocols', name: 'Protocols' },
  { id: '240809797b4280c7a596f9d4cf3aac18', path: 'Source-of-Truth/Annexes/Processes', name: 'Processes' },
  { id: '240809797b4280f3ad50fd58d92c6fb4', path: 'Source-of-Truth/Annexes/Debriefs', name: 'Debriefs' },
  { id: '240809797b4280d3aa1ef647a567776b', path: 'Source-of-Truth/Annexes/Guides', name: 'Guides' },
  { id: '240809797b4280558421ed0009719549', path: 'Source-of-Truth/Annexes/Roadmaps', name: 'Roadmaps' },
  { id: '240809797b4280d2a735eec127de0156', path: 'Source-of-Truth/Annexes/References', name: 'References' },
  { id: '240809797b42801ba12dcce8b8c06a8b', path: 'Source-of-Truth/Annexes/Methodologies', name: 'Methodologies' },
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
