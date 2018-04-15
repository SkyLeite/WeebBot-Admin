import * as React from 'react';
import { connect } from 'react-redux';
import { login } from '../Actions';
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const LoginButton = ({ dispatch }: any) => (
    <Button onClick={() => window.location.href = "http://localhost:3000/api/auth/discord"}>Login</Button>
);

export default connect()(LoginButton);