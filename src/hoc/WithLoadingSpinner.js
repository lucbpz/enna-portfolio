import React from 'react';
import Spinner from '../components/Spinner';
// import './WithLoadingSpinner.css';

const WithLoadingSpinner = fetchData => WrappedComponent => {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { loading: true };
        }
        componentDidMount() {
            fetchData().then((data) =>
                this.setState({ loading: false, ...data }));
        }
        render() {
            const { loading, ...data } = this.state;
            return (
                <div>
                    {loading ? (<Spinner />) : (<WrappedComponent {...data} />)}
                </div>

            );
        }
    }
};

export default WithLoadingSpinner;