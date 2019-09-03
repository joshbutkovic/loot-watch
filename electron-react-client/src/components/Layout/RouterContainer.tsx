import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { PoseGroup } from 'react-pose';
import { RouteTransitionWrapper } from '../../utils/poseAnimations';
import Welcome from '../Container/Welcome';
import CreateBudget from '../Container/CreateBudget';
import Login from '../Container/Login/Login';
import Register from '../Container/Register/Register';

const RouterContainer = () => {
    return (
        <Route
            render={({ location }) => (
                <PoseGroup>
                    <RouteTransitionWrapper key={location.pathname}>
                        <Switch location={location}>
                            <Route
                                exact
                                path="/"
                                component={Welcome}
                                key={'welcome'}
                            />
                            <Route
                                exact
                                path="/cbudget"
                                component={CreateBudget}
                                key={'cbudget'}
                            />
                            <Route
                                exact
                                path="/login"
                                component={Login}
                                key={'login'}
                            />
                            <Route
                                exact
                                path="/register"
                                component={Register}
                                key={'login'}
                            />
                        </Switch>
                    </RouteTransitionWrapper>
                </PoseGroup>
            )}
        />
    );
};

export default withRouter(RouterContainer);
