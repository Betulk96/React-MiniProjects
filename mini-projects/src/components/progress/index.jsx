import React, { useState } from 'react';
import { Button, ButtonGroup, Container, ProgressBar } from 'react-bootstrap';
import { TfiPlus, TfiMinus } from "react-icons/tfi";
import { GrPowerReset } from "react-icons/gr";

const Index = () => {
    const [progress, setProgress] = useState(0);

    const increment = () => {
        if (progress < 100) {
            setProgress((prev) => prev + 10);
        }
    };

    const decrement = () => {
        if (progress > 0) {
            setProgress((prev) => prev - 10);
        }
    };
    const colors = [
        "danger",
        "warning",
        "danger",
        "warning",
        "danger",
        "warning",
        "danger",
        "warning",
        "danger",
        "warning",


    ];
    const getVariant = () => {
        for (let i = 0; i < colors.length; i++) {
            if (progress <= (i + 1) * 10) {
                return colors[i];
            }
        }
        return "primary"; // 100 üzerindeki değerler için varsayılan renk
    };
    return (
        <Container className="mt-4 ">
            <ButtonGroup className='gap-2'>
                <Button onClick={decrement}>{TfiMinus()}</Button>
                <Button variant="danger" onClick={() => setProgress(0)}>
                    <GrPowerReset />
                </Button>
                <Button onClick={increment}>{TfiPlus()}</Button>
            </ButtonGroup>

            <ProgressBar className='mt-4' now={progress} label={`${progress}%`} variant={getVariant()} />
        </Container>
    );
};

export default Index;
