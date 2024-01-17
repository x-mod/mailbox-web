import * as React from 'react';
import { Title, Text, Container } from '@mantine/core';
import { Dots } from './dots';
import classes from "./hero.module.scss";

export function Hero() {
  return (
    <Container className={classes.wrapper} size={1000}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 120 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {' '}
          <Text component="span" className={classes.highlight} c="indigo" inherit>
            Mailbox
          </Text>{' '}
          for Your {' '}
          <Text component="span" className={classes.highlight} c="indigo" inherit>
          ALL
          </Text>{' '} Email Accounts
          
        </Title>
        
        <Container p={0} size={600}>            
          <Text size="lg" c="dimmed" className={classes.description}>
            Selfhosted All-in-one email management platform for all your email accounts.
          </Text>
        </Container>
      </div>
    </Container>
  );
}