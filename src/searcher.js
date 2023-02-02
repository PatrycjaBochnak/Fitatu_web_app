import React from 'react';
import axios from 'axios';

class Searcher extends React.Component {
    state = {};
    constructor() {
        super();
        this.onInputchange = this.onInputchange.bind(this);
    }

    view() {
        axios.get('https://api.spoonacular.com/food/products/search?query='+this.state.products+'&addProductInformation=true&apiKey=6d0d470152d74ee2aa61eaa38e37af8d')
            .then((response) => {
                console.log(response.data.products);
                this.setState({
                    recipes: response.data.products
                });
            })
            .catch(function (error) {
                console.log(error);
            })
          };

    onInputchange(event) {
        this.setState({products: event.target.value});
    }


    render() {
        return (
            <div className={'searcher'}>
                <div className={'searchField'}>
                    <input type="text" placeholder="Search.." name="search" onChange={this.onInputchange}/>
                    <button type="submit" onClick={() => this.view()}><i className="fa fa-search"></i></button>
                </div>
                {this.state.recipes ? (
                    <table className="searchResults">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Calories</th>
                            <th>Fats</th>
                            <th>Carbs</th>
                            <th>Proteins</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(this.state.recipes).map(key => {
                            return (
                                <>
                                    <tr>
                                        <td>{this.state.recipes[key].title}</td>
                                        <td>{this.state.recipes[key].nutrition.calories}</td>
                                        <td>{this.state.recipes[key].nutrition.fat}</td>
                                        <td>{this.state.recipes[key].nutrition.carbs}</td>
                                        <td>{this.state.recipes[key].nutrition.protein}</td>
                                        <td>
                                            <select name="day" onChange={(e) => {console.log(e.target); this.props. setCurrentProduct({title: this.state.recipes[key].title, nutrition: this.state.recipes[key].nutrition, partOfDay: e.target.value})}}>
                                                <option value={"choose part of day"}>
                                                    Choose part of day 
                                                </option>                                              
                                                <option value={"breakfast"}>
                                                    Breakfast
                                                </option>
                                                <option value={"secondBreakfast"}>
                                                    Second Breakfast
                                                </option>
                                                <option value={"dinner"}>
                                                    Dinner
                                                </option>
                                                <option value={"supper"}>
                                                    Supper
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                        </tbody>
                    </table>
                ) : ''}
            </div>
        );
    }
}

export default Searcher;

