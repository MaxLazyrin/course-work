import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = React.lazy(() => import('src/routes/Main'));
const SlinkinPage = React.lazy(() => import('src/routes/SlinkinPage'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/slinkin" component={SlinkinPage} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
