import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function averages(data){
  return _.round(_.sum(data)/(data.length));
}

export default (props) => {
    return(
      <div>
        <Sparklines height={100} width={150} data={props.data} units={props.units}>
          <SparklinesLine color = {props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div> {averages(props.data)} {props.units} </div>
      </div>
    );
}
