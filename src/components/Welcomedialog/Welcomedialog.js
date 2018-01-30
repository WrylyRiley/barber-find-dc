import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import './Welcomedialog.css'


export default class WelcomeDialog extends Component {
    render = () => {
        return (
             <Modal open={true} dimmer={false} size='small'> 
                <Modal.Header className='header'>BarberHub</Modal.Header>
                <Modal.Content className='description'>
                    <p>Whether you’re looking for your next barber or looking for better tips on cutting your own hair, this app is a one-stop shop. BarberHub lists highly rated barbershops in the Washington DC area along with a round-up of tutorials in self-barbering. Our team was given exactly one week to build out this app, which incorporates MongoDB, Express, React.js, and API integration. Click one of the icons below to begin!</p>
                </Modal.Content>
                <Modal.Actions className='button-container'>
                    <Button className='button-icons'>
                        <Icon name='building outline' size='large' />
                        Shops
                    </Button >
                    <p>or</p>
                    <Button className='button-icons'>
                        <Icon name='play outline' size='large' />
                        Tutorials
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

}
