import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import {
  remarkExtendedTable,
  extendedTableHandlers,
} from "remark-extended-table";


export const parseMarkdown = (md: string) =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkExtendedTable)
    .use(remarkRehype, null, {
      handlers: Object.assign({}, extendedTableHandlers),
    })
    .use(rehypeStringify)
    .process(md);
