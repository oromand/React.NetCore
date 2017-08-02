import * as  React from "react"
//import {Row, Input, Icon, Button} from "react-materialize"
import {ListOffersForm} from "./ListOffersForm"

class ListOffers extends React.Component {
  
  
    //componentWillMount() {
    //    fetch('http://localhost:port/api/Offer')
    //    .then((response) => {
    //        return response.json()
    //    })
    //    .then((empleados) => {
    //        this.setState({ empleados: empleados })
    //    })
    //}

    
    render() {
        return (
            <div className="section">
                <div className="row presentation">
                      <div className="col s4 card-panel hoverable">
                        <div className="center promo promo-example">
                            <img className="responsive-img" src="http://www.lesrapacesdegap.fr/images/001.jpg" alt=""/>
                            <br/>
                            <i className="material-icons">access_time</i>
                            <p className="promo-caption">Développement accéléré</p>
                            <p className="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
                        </div>
                    </div>
                      <div className="col s4 card-panel hoverable">
                        <div className="center promo promo-example">
                            <img className="responsive-img" src="http://www.lesrapacesdegap.fr/images/aur%C3%A9lien.jpg" alt = ""/>
                            <br/>
                            <i className="material-icons">verified_user</i>
                            <p className="promo-caption">Centré sur l'experience utilisateur</p>
                            <p className="light center">By utilizing elements and principles of Material Design, we were able to create a framework that focuses on User Experience.</p>
                        </div>
                    </div>
                      <div className="col s4 card-panel hoverable">
                        <div className="center promo promo-example">
                            <img className="responsive-img" src="data:image/jpeg;base64,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" alt=""/>
                            <br/>
                            <i className="material-icons">clock</i>
                            <p className="promo-caption">Sécurisé</p>
                            <p className="light center">We have provided detailed documentation as well as specific code examples to help new users get started.</p>
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

               <ListOffersForm/>

                <table className="bordered stripped highlight list-offers">
                    <thead>
                        <tr>
                            <td>Région</td>
                            <td>Poste</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PACA</td>
                            <td>Ailier</td>
                            <td>21 ans</td>
                        </tr>
                        <tr>
                            <td>PACA</td>
                            <td>3ème ligne</td>
                            <td>22 ans</td>
                        </tr>
                        <tr>
                            <td>PACA</td>
                            <td>Ailier</td>
                            <td>21 ans</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}

export default ListOffers;