import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    "Personal Details",
    "Fast Foods ",
    "Sugar",
    "Pulses",
    "Non-Veg",
    "Dairy",
    "Vegetables",
    "Fruits",
    "Water",
    "Exercise"
];

const PersonalDetails = (props) => {
    return (
        <div>
            <h4>Enter your details:</h4>
        </div>
    );
}

const One = (props) => {
    return (
        <div>
            <h4>How often do you eat packaged foods, deep fried foods, or refined flour (maida) foods like pizza, pasta, fries/chips, bhajiya/pakodas, burger, noodles, biscuits, cakes, sweets, etc.?</h4>
        </div>
    );
}

const Two = (props) => {
    return (
        <div>
            <h4>Do you take whole grains (multigrain/brown bread, brown rice, whole wheat chapatis) in your meals?</h4>
        </div>
    );
}

const Three = (props) => {
    return (
        <div>
            <h4>How many tea spoons of sugar do you take in a day as part of beverages (tea/coffee/milk) or soft drinks/juices? (For 1 glass of readymade fruit juice count 4 teaspoons; For 1 bottle 200ml of cola/soft drink count 6 teaspoons).</h4>
        </div>
    );
}

const Four = (props) => {
    return (
        <div>
            <h4>Do you take pulses (daals), or soyabean in your diet?</h4>
        </div>
    );
}

const Five = (props) => {
    return (
        <div>
            <h4>Do you eat non-vegetarian food?</h4>
        </div>
    );
}

const Six = (props) => {
    return (
        <div>
            <h4>Do you take dairy products like milk, cheese, curd or paneer (tofu) in your diet?</h4>
        </div>
    );
}

const Seven = (props) => {
    return (
        <div>
            <h4>How often do you eat green vegetables and salads?</h4>
        </div>
    );
}

const Eight = (props) => {
    return (
        <div>
            <h4>How often do you eat fruits? </h4>
        </div>
    );
}

const Nine = (props) => {
    return (
        <div>
            <h4>How many glasses of water do you drink in a day? (One glass is 200-250ml)</h4>
        </div>
    );
}

const Ten = (props) => {
    return (
        <div>
            <h4>Do you have physical exercise like brisk walking, cycling, swimming, yoga, aerobics etc. for at least half hour.</h4>
        </div>
    );
}



function getStepContent(step) {
    switch (step) {
        case 0:
            return (<PersonalDetails />);
        case 1:
            return (<One />);
        case 2:
            return (<Two />);
        case 3:
            return (<Three />);
        case 4:
            return (<Four />);
        case 5:
            return (<Five />);
        case 6:
            return (<Six />);
        case 7:
            return (<Seven />);
        case 8:
            return (<Eight />);
        case 9:
            return (<Nine />);
        case 10:
            return (<Ten />);

        default:
            return 'Unknown step';
    }
}

export default function DNA() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <Paper elevation={3} >
                <h1>Dietary Nutrition Assessment</h1>
                <Box sx={{ maxWidth: 2 / 3, margin: '0 auto' }}>

                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step}>
                                <StepLabel
                                    optional={
                                        index === 9 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{getStepContent(index)}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            </Paper>
        </div>
    );
}
