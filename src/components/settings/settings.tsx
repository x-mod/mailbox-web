import * as React from "react";
import { useEffect, useState } from "react";
import { Text, Button, Group, Container } from '@mantine/core';


export function Settings() {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    
    return (
        <Container>
            <Text>Hello</Text>
            <Group justify="center" mt="sm">
                <Button variant="filled" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
        </Container>  
    )
}