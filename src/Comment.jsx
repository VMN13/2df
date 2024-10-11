import React  from "react";
import Image from "./Photo/dece9416-e95d-4224-bd32-7dfedbfb30e4.svg";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

class SortResults extends React.Component {
   constructor(props) {
    super(props);
    this.state = ({
        sortField: "null",
        data: [
          {"text": "Ich habe Weight Berry bestellt. Ich habe in letzter Zeit viel Gewicht zugenommen, also muss ich etwas tun. Diäten und Sport helfen nicht, ich wiege bereits 95 kg. Schrecklich natürlich, ich hoffe, dass dieser Weight Berry mir helfen wird!",  "val1": 1, "val2": 4, "val3": 9 },
          {"text": "Interessanter Artikel und interessantes Mittel. Es ist jedoch noch nicht klar, wie es funktioniert.",  "val1": 3, "val2": 1, "val3": 6},
          {"text": "Das Ziel ist, den Stoffwechsel zu beschleunigen. Das heißt, Sie verwerten die Kohlenhydrate vollständig, ohne sie zu speichern, dann nehmen Sie viel weniger davon zu sich (Sie haben einfach keine Lust, Sie wollen Fleisch und Wasser!), und der Körper beginnt dann, Energie aus den alten Fettreserven zu ziehen und lässt den Bauch, die Flanken und das Fett der inneren Organe links liegen. Weight Berry ist ein hervorragendes Mittel gegen viszerales Fett. Es hat mir sehr geholfen!", "val1": 2, "val2": 3, "val3": 1}
        ]
    });

   this.createResultToRender = this.createResultToRender.bind(this);
   this.handleSortChange = this.handleSortChange.bind(this);
  }
  
  sortBasedOnKey (array, property) {
    return array.sort(function (o1, o2) {
      let x = o1[property];
      let y = o2[property];
     return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    });
  };

  handleSortChange = (e) => {
    if (e.target.value !== "null") {
      let sortedData = this.sortBasedOnKey(this.state.data, e.target.value);
      this.setState({
        sortField: e.target.value,
        data: sortedData
      });
    };
  };

  createResultToRender() {
    let result = [];
    this.state.data.map((item) => {
      result.push(
        <div className="sort=card
        text-center
        mx-2
        ">
          <div className="flex">
          <img className="
            rounded-full
            h-24
            w-10"
           src={Image}>
          </img>
          <FaRegArrowAltCircleUp
         
          className="w-full" />
          
          {item['text']}
         </div>
        </div>
      )
    });
    return result;
  };

  render(){
    return(
      <div className="
        w-80 
        mx-10 
        sort-render
        content-left
        my-5
        ">
          <div className='
             col-sm-4              
             form-inline' 
             id="sort-grid">
               <div className="form-group">
                <label htmlFor="list-sorting" 
                       className='col-form-label'>
                   Ansichtsoptionen
                </label>
                   <select defaultValue={this.state.sortField}
                      id="list-sorting"
                      onChange={this.handleSortChange}
                      key="val0"
                      >
                       <option

                         value={'null'} 
                         key="val0">
                           Choose ...
                        </option>

                         <option 
                           value={'val1'}
                           key="val1">
                              Am besten bewertet
                          </option>

                          <option
                            value={'val2'}
                            key="val2">
                              Neueste zuerst
                          </option>
                          <option 
                            value={'val3'} 
                            key="val3">
                              Älteste zuerst
                          </option>
                      </select>  
                  </div>
              </div>
              <br></br>
              {this.createResultToRender()}
          </div>            
      );
  };
   
};
export default SortResults;