class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantID: this.props.restaurantID,
            time: "",
            date: "",
            numPeople: "",
            numTimes: "",
            availableTimes: [-1],
            errors: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.props.fetchUsers();
    }

    handleSubmit(e) {
        e.preventDefault();
        submitReservation( {
            restaurantID: this.state.restaurantID,
            time: this.state.time,
            date: this.state.date,
            numPeople: this.state.numPeople,
        }).then( 
            availableTimes => this.setState( {availableTimes: availableTimes }),
            err => this.setState( {errors: err } ),
        ),
    }


        
    render () {

        let times = this.state.availableTimes.map( time =>
            <li key={time}> {time} </li> 
        )

        let renderTimes = (
            <ul>
                { times }
            </ul>
        )

        return (
            <div>
                <div>Make a reservation</div>
                <div>
                    <input type="number"></input>
                    <input type="date"></input>
                    <input type="time"></input>
                    <button onClick={this.handleSubmit}></button>
                </div>
                <div>
                    { 
                        this.state.availableTimes.length > 0 ? 
                        (
                        `Availability on ${this.state.time}`
                        `Booked ${this.state.numTimes} today`
                        )
                        :
                        (
                            ""
                        )
                    }
                    { renderTimes }
                </div>
            </div>
            
        );
    }
}

const submitReservation = ({ restaurantID, time, date, numPeople }) => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants/${restaurantID}/${time}/${date}/${numPeople}`
    })
);