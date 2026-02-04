import { bundledLanguages, createHighlighter } from 'shiki/bundle/web';
import { noir } from './custom-theme';

let highlighterPromise: Promise<
  Awaited<ReturnType<typeof createHighlighter>>
> | null = null;

async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [noir],
      langs: [...Object.keys(bundledLanguages)],
    });
  }
  return highlighterPromise;
}

export const codeToHtml = async ({
  code,
  lang,
}: {
  code: string;
  lang: string;
}) => {
  const highlighter = await getHighlighter();

  return highlighter.codeToHtml(code, {
    lang: lang,
    theme: 'noir',
  });
};
