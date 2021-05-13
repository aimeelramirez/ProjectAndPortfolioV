import { Route, Switch } from "react-router-dom";
const Navigation = () => {
    return (
        <section id="navigation-route">
            <article className="users-list">
                <Switch>
                    <Route exact path="/Users" component={Users} />
                </Switch>
            </article>
        </section>
    );
};
const Users = () => {
    return <><h2>You are signed in!</h2></>
}

export default Navigation;