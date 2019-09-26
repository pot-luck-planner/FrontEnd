//usable data for layout and such. Example, no endpoint was made for profile
//image, but I want to layout with one. I could use this to hold that data. 
//Maybe seperate generic gender pics that I can show with the seperate data 
//returning?


//from App.js
///<Switch>
        //   <PrivateRoute path = "/events" component = {Events} />
        //   <Route path = "/login" component = {Login} />
        //   <PrivateRoute exact path = "/accounts" />
        //   <PrivateRoute path = "/addevent" component = {EventForm} />
        //   <PrivateRoute exact path = "/accounts" />
        //   <PrivateRoute path = "/addevent" component = {EventForm} />
        //   <RegForm />

        // </Switch>

//         const DashBase = styled.div`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         width: 100%;
//         height: 100%;
//         background-color: #D9580D;
//     `;
//     const Spacer = styled.div`
//         display: flex;
//         background-color: #F0F2F2;
//         align-items: center;
//         height: 4.5rem;
//         border: 1px solid #999999;
//         border-radius: 5px;
//         margin-bottom: 1rem;
//     `;
//     const SpacerTop = styled.div`
//         display: flex;
//         align-items: center;
//         text-align: center;
//         height: 4.5rem;
//         width: 142px;
//         border: 1px solid #999999;
//         background-color: #F0F2F2;
//         border-radius: 5px;
//         margin-top: 1rem;
//         margin-bottom: 1rem;
//     `;
//     const Title = styled.h1`
//         width: 142px;
//         align-items: center;
//     `;
//     const DashBtn = styled.button`
//         margin: 0 20% 0 20%;
//         width: 10rem;
//         height: 3rem;
//         background-color: #30BF45;
//         border: 1px solid #999999;
//         border-radius: 5px;
//         color: white;
    
//         :hover{
//             background-color: #C4F2D0;
//             color: black;
//         }
//     `;

//line 32 App
// <Switch>
//           <PrivateRoute
//           path = "/invite-user/:id"
//           render={(props) =>
//           <AttendieCard {...props} />} />
//           <PrivateRoute 
//           path = "/events"
//           render ={(props) =>
//           <Events {...props} /> }  />
//           <PrivateRoute
//           path = "/invites"
//           render={(props) => 
//           <Invites {...props} />} />
//           <Route path = "/login" component = {Login} />
//            <PrivateRoute exact path = "/accounts/:username"
//                         render={props => {
//                           return <Dashboard {...props} />
//                         }} /> 
//           <PrivateRoute path = "/addevent" component = {EventForm} />
//           <PrivateRoute path = "/updateevent/:id" render = {(props) => <EventUpdate {...props} /> }  />
//           <RegForm />

//         </Switch>