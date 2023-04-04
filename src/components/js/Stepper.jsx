import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


export default function VerticalLinearStepper() {

  const metodo_pago = [
    {
      value: 'efectivo',
      label: 'Efectivo',
    },
    {
      value: 'credito',
      label: 'Credito',
    },
  ];
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [mail, setMail] = useState('');
  const [metodo_pago2, setMetodo_pago] = useState('');

  const steps = [
    {
      label: 'Datos Personales',
      description:     
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <TextField 
          name='nombre' 
          onChange={(event) => setNombre(event.target.value)} 
          label="Nombre" 
          variant="outlined"/>

        <TextField 
          name='apellido' 
          onChange={(event) => setApellido(event.target.value)} 
          label="Apellido" 
          variant="outlined"/>

        <TextField 
          name='identificacion' 
          onChange={(event) => setIdentificacion(event.target.value)} 
          label="# de Identificación" 
          variant="outlined"/>

        <TextField 
          name='nacionalidad' 
          onChange={(event) => setNacionalidad(event.target.value)} 
          label="Nacionalidad" 
          variant="outlined"/>

        <TextField 
          name='mail' 
          onChange={(event) => setMail(event.target.value)} 
          label="Mail" 
          variant="outlined"/>
      </Box>    
    },
    
    {
      label: 'Metodo de Pago',
      description:       
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <div>
        <TextField
          id="metodo_pago"
          select
          label="Select"
          onChange={(event) => setMetodo_pago(event.target.value)} 
          >
          {metodo_pago.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  
      </div>
  
    </Box>
    },
  
    {
      label: 'Detalles de tu reserva',
      description: 
      <Box>
        <div>{nombre}</div>
        <div>{apellido}</div>
        <div>{identificacion}</div>
        <div>{nacionalidad}</div>
        <div>{mail}</div>
        <div>{metodo_pago2}</div>
      </Box>
    },
  ];

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
    <Box sx={{ maxWidth: 400 }}>

      <Stepper activeStep={activeStep} orientation="vertical">

        {steps.map((step, index) => (

          <Step key={step.label}>

            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>

            <StepContent>

              <Typography>{step.description}</Typography>
              
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
  );
}