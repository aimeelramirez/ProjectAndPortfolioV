import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"


const routes = [
    {
        path: "#/guest",
        component: Guest
    },

    {
        path: "#/sandwiches",
        component: Sandwiches
    },
    {
        path: "#/tacos",
        component: Tacos,
        routes: [
            {
                path: "#/tacos/bus",
                component: Bus
            },
            {
                path: "#/tacos/cart",
                component: Cart
            },

        ]
    }
];


export default function Navigation() {
    return (
        <Router>
            <section className="app-body">
                <div>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="#/tacos">Tacos</Link>
                        </li>
                        <li>
                            <Link to="#/sandwiches">Sandwiches</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i}
                                {...route} />
                        ))}
                    </Switch>
                </div>
            </section>
        </Router>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function Sandwiches() {
    return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
    return (
        <div >
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="#/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="#/tacos/cart">Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    );
}

function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}


function Guest() {
    return <h2>Guest</h2>
}