import Loadable from 'react-loadable'

const components = (path) => Loadable({
    loader:() => import(`@/components/${path}`),
    loading:() => (null)
});

const List = components('list/list');
const Main = components('main/main');
const SubHeader = components('subHeader/subHeader.jsx');
export {
    Main,
    List,
    SubHeader,
}