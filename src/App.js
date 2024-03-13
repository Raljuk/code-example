import './App.css';
import ErrorBoundary from 'components/ErrorBoundary';
import Routes from 'pages/Routes';

function App() {
  return (
    <ErrorBoundary>

        <Routes />

        <Alerts />

    </ErrorBoundary>
  );
}

export default App;
