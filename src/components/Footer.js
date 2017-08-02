import React from "react";
import {Footer} from "react-materialize"

//rename to avoid conflict
class _Footer extends React.Component {
    render() {
        return(
            <Footer copyrights="Copyrights - IXCYS"

	links={
		<ul className="">
			<li><a className="grey-text text-lighten-3" href="#!">A propos</a></li>
			<li><a className="grey-text text-lighten-3" href="#!">Crédit</a></li>
		</ul>
	} 
    className="blue darken-3">
		<a className="btn btn-floating btn-large pulse red darken-3"><i className="material-icons">data_usage</i></a>
		<span className="grey-text text-lighten-4">&nbsp;Une solution IXCYS</span>
</Footer>


        );
    }
}

export default _Footer