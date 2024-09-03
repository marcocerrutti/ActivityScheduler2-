import { Link } from 'react-router-dom';
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react';

function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
           <Container text>
               <Header as='h1' inverted>
                 <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom:12}} />
                  Activity Social
               </Header>
               <Header as='h2'inverted content='Welcome to ActivitySocial' />
               <Button as={Link} to='/activities' size='huge' inverted>
                      Take me to activities
               </Button>
           </Container>
        </Segment>
    );
}

export default HomePage;
