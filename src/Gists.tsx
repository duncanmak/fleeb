import * as React from 'react';
import { Dispatch } from 'redux';
// import { connect } from 'react-redux'
import { loadGists } from './actions'
import { RouteComponentProps } from 'react-router';

interface GistsProps extends RouteComponentProps<any>{
    user: string;
    gists: any[];

    dispatch: Dispatch<{}>;
}

export class Gists extends React.Component<GistsProps, undefined> {

    componentDidMount() {
        this.props.dispatch(loadGists(this.props.user))
    }

    componentWillReceiveProps(nextProps: GistsProps) {
        if (nextProps.user !== this.props.user) {
            this.props.dispatch(loadGists(nextProps.user))
        }
    }

    render() {
        let data = this.props.gists.map((e, i) =>
            <div key={i}>{e.id}</div>
        );

        return <div>{data}</div>
    }
}

// export default connect(state => ({
//   gists: state.gists
// }))(Gists)