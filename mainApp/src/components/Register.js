import React, { Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

class Register extends Component {
    state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.name);
        
    };
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.password == this.state.password2, " checking equal");
        this.props.addNewUser(this.state.name, this.state.email, this.state.password, this.state.password2);
        this.setState({ name: '', email: '', password: '', password2: '' });
    };
    render() {
        const { errors } = this.state;
    return (
        <Box style={{marginTop:'40px', display:'flex', justifyContent:'center'}}>
            <form noValidate onSubmit={this.onSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    required="true"
                    placeholder="Enter Name"
                    value={this.state.name}
                    helperText="e.g. Tushar Sekhri"
                    margin="normal"    
                    onChange={this.onChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                /><br></br><br></br>
                <TextField
                    name="email"
                    label="Email Address"
                    required="true"
                    placeholder="Enter Email Address"
                    value={this.state.email}
                    helperText="e.g. tusharsekhri9@gmail.com"
                    margin="normal"
                    onChange={this.onChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                /><br></br><br></br>
                <TextField
                    name="password"
                    label="Password"
                    required="true"
                    value={this.state.password}
                    margin="normal"
                    onChange={this.onChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                />
                <br></br><br></br>
                <TextField
                    name="password2"
                    label="Confirm Password"
                    margin="normal"
                    required="true"
                    value={this.state.password2}
                    onChange={this.onChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                />
                <br></br><br></br>
                <Button
                    variant="contained"
                    type="submit"
                >
                Register
                </Button>
            </form>
            </Box>
    );
  }
}
export default Register;
/*export class Proportions extends Component {

    state = {
        name: '',
        email: '',
        content: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state.name, this.state.email, this.state.content);
        this.setState({ name: '', email: '', content: '' });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        return (
            <Box style={{marginTop:'40px', display:'flex', justifyContent:'center'}}>
            <form noValidate onSubmit={this.onSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    required="true"
                    placeholder="Enter Name"
                    helperText="e.g. Tushar Sekhri"
                    margin="normal"
                    value={this.state.name}
                    onChange={this.onChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                /><br></br><br></br>
                <TextField
                    name="email"
                    label="Email Address"
                    required="true"
                    placeholder="Enter Email Address"
                    helperText="e.g. tusharsekhri9@gmail.com"
                    margin="normal"
                    value={this.state.email}
                    onChange={this.onChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                /><br></br><br></br>
                <TextField
                    name="content"
                    label="Message"
                    placeholder="Enter Message"
                    rowsMax={10}
                    rows={4}
                    margin="normal"
                    value={this.state.content}
                    onChange={this.onChange}
                    multiline="true"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    style={{width:'30ch'}}
                />
                <br></br><br></br>
                <Button
                    variant="contained"
                    type="submit"
                >
                Submit
                </Button>
            </form>
            </Box>
        )
    }
}

export default Register


*/
/*<form onSubmit={this.onSubmit}>
    <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
    <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
    <input type="text" name="content" value={this.state.content} onChange={this.onChange} />
    <input type="submit" value="submit" />
</form>*/
