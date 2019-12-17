import './index.css';
import groupList from './group';
import ko from 'knockout';

const bindGroupList = groupList.map((val) => {
    val.link = `pages/${val.folder}/index.html`;

    return val;
});

ko.applyBindings({
   people: bindGroupList
});
