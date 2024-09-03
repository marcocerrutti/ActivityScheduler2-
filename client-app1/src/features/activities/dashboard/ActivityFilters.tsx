import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';

function ActivityFilters() {
    return (
        <>
           <Menu vertical sie='large' style={{width: '100%', marginTop: 26}}>
            <Header icon='filter' attached color='teal' content='Filters' />
            <Menu.Item content='All Activities' />
            <Menu.Item content="I'm going" />
            <Menu.Item content="I'm hosting" />
        </Menu>
        <Header />
        <Calendar />
        </>
       
    );
}

export default ActivityFilters;