import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist', 'assets');
const target = path.resolve(process.cwd(), '..', 'ui.apps', 'src', 'main', 'content', 'jcr_root', 'apps', 'AEMHeadlessReactSample', 'clientlibs', 'react-app');

function copy() {
  if (!fs.existsSync(dist)) throw new Error('dist/assets missing - run build first');
  if (!fs.existsSync(target)) throw new Error('target clientlib missing');

  const jsTarget = path.join(target, 'js');
  const cssTarget = path.join(target, 'css');
  fs.mkdirSync(jsTarget, { recursive: true });
  fs.mkdirSync(cssTarget, { recursive: true });

  for (const f of fs.readdirSync(dist)) {
    const src = path.join(dist, f);
    if (f.endsWith('.js')) fs.copyFileSync(src, path.join(jsTarget, f));
    if (f.endsWith('.css')) fs.copyFileSync(src, path.join(cssTarget, f));
  }
  console.log('Copied dist assets to AEM clientlib');
}

copy();
