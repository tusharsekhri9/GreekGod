import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

class Base extends Component {
    render() {
    return (
        <Link component=""><Typography variant='h4' align="center">Already have an account</Typography></Link>
        
    );
  }
}
export default Base;
/*<ThemeProvider theme={this.test}>
                <Grid container="true" spacing={2} alignItems="center" style={{marginTop:'40px'}}>
                        <Grid container item xs={6} sm={7} direction="column" alignItems="flex-end" justify="center">    
                            <Grid item xs={12}><Typography variant='h4' align="center">Hi, I'm Tushar Sekhri</Typography></Grid>
                            <Grid item xs={12}><Typography variant='h6' align="center">Welcome to My World</Typography></Grid>
                        </Grid>
                        <Grid container item xs={6} sm={5} sm={4} justify="flex-start" alignItems="center">
                            <img src={me} alt=""/>
                        </Grid>
                        <Grid container item direction="column" alignItems="center" style={{marginTop:'20px'}}>    
                            <Grid item><Typography variant='h4' align="center">About Me</Typography></Grid>
                            <Grid item style={{maxWidth:'800px'}}><Typography component='p' variant='p' style={{textAlign:"justify", padding:'20px'}}>I am a 3rd year Computer Science student at the University of Waterloo. I am a highly motivated student with a passion for algorithmic problem-solving and application of modern technologies. I seek out opportunities to apply and develop my software skills through hackathons, work opportunites and side projects. Through these experiences, I have developed a passion for working on a team, take a leadership role, and performing well in high-pressure environments. </Typography></Grid>
                        </Grid>
                        <Grid container spacing={2} item direction="column" alignItems="center" style={{marginTop:'20px'}}>    
                            <Grid item><Typography variant='h4' align="center">Experience</Typography></Grid>
                            <Grid container spacing={2} item direction='row' alignItems='center' justify='center' style={{maxWidth:'800px'}}>
                                <Grid item sm={4} xs={12} style={{display:"flex", justifyContent:"center"}}>
                                    <Card style={{width:'200px', height:'400px' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                //height="200px"
                                                //width="200px"
                                                image={tangam}
                                                title="Tangam Systems"
                                                style={{width:'200px', height:'200px'}}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                                Tangam Systems
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                                Software Developer
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>     
                                </Grid>
                                <Grid item sm={4} xs={12} style={{display:"flex", justifyContent:"center"}}> <Card style={{width:'200px', height:'400px'}}>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                //height="=200px"
                                                //width="200px"
                                                image={ttc}
                                                title="Tangam Systems"
                                                style={{width:'200px', height:'200px'}}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                                Toronto Transit Commission
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                                Software Developer
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card> </Grid>
                                <Grid item sm={4} xs={12} style={{display:"flex", justifyContent:"center"}}>
                                <Card style={{width:'200px', height:'400px'}}>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                //height="200px"
                                                //width="200px"
                                                image={wcdsb}
                                                title="Tangam Systems"
                                                style={{width:'200px', height:'200px'}}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                                Waterloo Catholic District School Board
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                                Software Developer
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card> 
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                    <Skills />
            </ThemeProvider>*/
