import Navbar from './navbar';
import { Box, Card, CardContent, CardActions,AccordionSummary,Accordion,AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Newsletter() {
    return (
        <div>
            <Navbar />
            <div className='box'>
                <Box width='1200px'>
                    <Card id="card" className='card'>
                        <CardContent>
                            <Accordion id="accordion">
                                <AccordionSummary
                                    style={{fontWeight:'bold',fontSize:'25px'}}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Aravind
                                </AccordionSummary>
                                <AccordionDetails style={{fontSize:'20px'}}>
                                    <h6 style={{fontSize:'15px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'15px'}}>From :&nbsp;</span> 
                                    aravind@gmail.com</h6>
                                    I need Angle Grinder
                                </AccordionDetails>
                            </Accordion>
                            <Accordion id="accordion">
                                <AccordionSummary
                                    style={{fontWeight:'bold',fontSize:'25px'}}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Aravind
                                </AccordionSummary>
                                <AccordionDetails style={{fontSize:'20px'}}>
                                    <h6 style={{fontSize:'15px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'15px'}}>From :&nbsp;</span> 
                                    aravind@gmail.com</h6>
                                    I need Angle Grinder
                                </AccordionDetails>
                            </Accordion>
                            <Accordion id="accordion">
                                <AccordionSummary
                                    style={{fontWeight:'bold',fontSize:'25px'}}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Aravind
                                </AccordionSummary>
                                <AccordionDetails style={{fontSize:'20px'}}>
                                    <h6 style={{fontSize:'15px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'15px'}}>From :&nbsp;</span> 
                                    aravind@gmail.com</h6>
                                    I need Angle Grinder
                                </AccordionDetails>
                            </Accordion>
                            <Accordion id="accordion">
                                <AccordionSummary
                                    style={{fontWeight:'bold',fontSize:'25px'}}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Aravind
                                </AccordionSummary>
                                <AccordionDetails style={{fontSize:'20px'}}>
                                    <h6 style={{fontSize:'15px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'15px'}}>From :&nbsp;</span> 
                                    aravind@gmail.com</h6>
                                    I need Angle Grinder
                                </AccordionDetails>
                            </Accordion>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Box>
            </div>
        </div>
    );
}

export default Newsletter;
