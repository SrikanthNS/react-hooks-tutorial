import Home from './Home';
import BasicHooks from './BasicHooks';
import BasicHackerNews from './basic-hooks/hacker-news';
import RenderPropsVersusHooks from './basic-hooks/replace-render-props';
import ContextExample from './basic-hooks/using-context';

import CustomHackerNews from './custom-hooks/hacker-news';
import OnScreen from './custom-hooks/scroller';
import StoredForm from './custom-hooks/stored-form';
import Counter from './redux/reducers';
import Responsive from './custom-hooks/responsive';

import RulesOfHooks from './rules-of-hooks';
import NotFound from './utils/404';

// This is a quick 3 second router implementation. Don't copy it :)

const pathConfig = {
  '/': { component: Home, name: 'Home' },
  '/basic': { component: BasicHooks, name: 'Basic Hooks' },
  '/basic/fetch': { component: BasicHackerNews, name: 'Basic Hooks - Hacker News' },
  '/basic/render-props': { component: RenderPropsVersusHooks, name: 'Basic Hooks - Replacing Render Props' },
  '/basic/context': { component: ContextExample, name: 'Basic Hooks - Using Context' },
  '/custom/fetch': { component: CustomHackerNews, name: 'Custom Hook - Hacker News with Fetch' },
  '/custom/scroll': { component: OnScreen, name: 'Custom Hook - IntersectionObserver' },
  '/custom/storage': { component: StoredForm, name: 'Custom Hook - Local Storage' },
  '/custom/redux': { component: Counter, name: 'Custom Hook - Reducers ala Redux' },
  '/custom/responsive': { component: Responsive, name: 'Custom Hook - Responsive Media Queries' },
  '/rules': { component: RulesOfHooks, name: 'Hook Rules' },
  '': { name: '' },
  'https://reactjs.org/docs/hooks-reference.html#useref': { name: 'useRef Hook' },
  'https://reactjs.org/docs/hooks-reference.html#useimperativehandle': { name: 'Using Ref Hooks for Components' },
  'https://reactjs.org/docs/hooks-reference.html#uselayouteffect': { name: 'useLayoutEffect Hook: Synchronous useEffect' },
  'https://reactjs.org/docs/hooks-faq.html#how-to-test-components-that-use-hooks': { name: 'Testing Hooks' },
  'https://reactjs.org/docs/hooks-intro.html': { name: 'Further reading' },
};

export function getPaths() {
  return Object.keys(pathConfig)
    .filter(p => p !== '/')
    .map(p => ({ route: p, ...pathConfig[p] }));
}

export function getRoute() {
  const { pathname } = window.location;
  const entry = pathConfig[pathname] || {};
  return entry.component || NotFound;
}
