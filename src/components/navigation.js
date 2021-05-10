import { Route, Switch } from "react-router-dom";
const Navigation = () => {
    return (
        <section id="navigation-route">
            {/* <nav className="Nav">
                <ul>
                    <li>
                        <Link className="Nav_link" to="/Home">
                            Home
            </Link>
                    </li>
              
                </ul>
            </nav> */}

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