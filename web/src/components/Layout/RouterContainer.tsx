import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../Container/Welcome';
import CreateBudget from '../Container/CreateBudget';
import Login from '../Container/Login';
import Register from '../Container/Register/Register';
import { PoseGroup } from 'react-pose';
import { RouteTransitionWrapper } from '../../utils/poseAnimations';

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

RouterContainer.propTypes = {
    location: PropTypes.object,
};

export default RouterContainer;
