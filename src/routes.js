import Home from './Home';
import BasicHooks from './BasicHooks';
import BasicHackerNews from './basic-hooks/hacker-news';
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
  '/custom/fetch': { component: CustomHackerNews, name: 'Custom Hook - Hacker News with Fetch' },
  '/custom/scroll': { component: OnScreen, name: 'Custom Hook - IntersectionObserver' },
  '/custom/storage': { component: StoredForm, name: 'Custom Hook - Local Storage' },
  '/custom/redux': { component: Counter, name: 'Custom Hook - Reducers ala Redux' },
  '/custom/responsive': { component: Responsive, name: 'Custom Hook - Responsive Media Queries' },
  '/rules': { component: RulesOfHooks, name: 'Hook Rules' },
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
