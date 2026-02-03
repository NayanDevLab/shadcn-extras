import fs from 'fs';
import path from 'path';
import { AVAILABLE_ICONS } from './available-icons';
import { codeToHtml } from '@/lib/shiki';

export async function getIconsData() {
  const icons = await Promise.all(
    AVAILABLE_ICONS.map(async (icon) => {
      const filePath = path.join(process.cwd(), icon.filePath);
      const componentPath = path.join(
        process.cwd(),
        `components/core/${icon.installName}.tsx`
      );

      let code = '';
      let componentCode = '';

      try {
        code = fs.readFileSync(filePath, 'utf-8');
      } catch (error) {
        console.error(`Failed to read file: ${filePath}`, error);
        code = '// Failed to read code';
      }

      try {
        componentCode = fs.readFileSync(componentPath, 'utf-8');
      } catch (error) {
        console.error(`Failed to read component file: ${componentPath}`, error);
        componentCode = '// Failed to read component code';
      }

      const html = await codeToHtml({
        code,
        lang: 'tsx',
      });

      const componentHtml = await codeToHtml({
        code: componentCode,
        lang: 'tsx',
      });

      return {
        ...icon,
        code,
        html,
        componentCode,
        componentHtml,
      };
    })
  );

  return icons;
}
