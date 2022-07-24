import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const eventsDirectory = path.join(process.cwd(), "events");

export function getSortedEventsData() {
    // Get file names
    const fileNames = fs.readdirSync(eventsDirectory);

    // For each file
    const allEventsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get event id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(eventsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const eventData = matterResult.data;

        // Combine the data with the id
        return {
            id,
            ...eventData,
        };
    });

    return allEventsData.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        } else {
            return 1;
        }
    });
}

export function getAllEventIds() {
    const fileNames = fs.readdirSync(eventsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getEventData(id) {
    const fullPath = path.join(eventsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert to HTML string
    const processedContent = remark().use(html).processSync(matterResult.content);
    const contentHtml = processedContent.toString();

    return { id, contentHtml, ...matterResult.data };
}
