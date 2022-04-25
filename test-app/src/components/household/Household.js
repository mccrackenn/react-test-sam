import React, { useState } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {
  TextField,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormGroup,
  Autocomplete,
  Radio,
  RadioGroup,
  FormControl,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { clientList } from "../../models/Client";
import "./Household.css";


const Household = () => {
  const [volunteer, setVolunteer] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [dob, setDob] = useState("");
  // const [volunteerStatus, setVolunteerStatus] = useState("");

  // Instructions to select household members once volunteer is selected will appear.
  let householdMessage = "";
  if (!volunteer) {
    householdMessage = "";
  } else if (volunteer) {
    householdMessage = (
      <p>Select the household members who volunteered on this day.</p>
    );
  }

  //  If client is only person in household, no checkboxes will be present.
  // maps array of volunteers to checkbox so user can select each volunteer who is currently working.
  let householdContent = (
    <p className="household-content-message">
      No additional household members.
    </p>
  );
  if (volunteer) {
    householdContent = volunteer.houseHold.map((client) => (
      <FormControlLabel
        key={client.id}
        control={<Checkbox />}
        label={`${client.firstName}`}
        value={client.id}
      />
    ));
  }
  // Grid form styling
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const dateChangeHandler = (newValue) => {
    setDate(newValue);
  };

  const formSubmissionHander = (event) => {
    event.preventDefault();

    // Logic to grab the household members

    // Resets form values for next entry
    setVolunteer(false);
    setFirstName("");
    setLastName("");
    setCity("");
    setDob("");
    // setVolunteerStatus("");
  };

  return (
    <div>
      <div className="auto-container">
        <div className="autocomplete-box-container">
          <Autocomplete
            id="volunteerList"
            defaultValue="Volunteers"
            options={clientList}
            renderInput={(params) => (
              <TextField {...params} label="Volunteers" variant="outlined" />
            )}
            getOptionLabel={(option) =>
              option.firstName
                ? `${option.firstName + " " + option.lastName}`
                : ""
            }
            freeSolo
            style={{ width: 270 }}
            value={volunteer}
            // value={(option, value) => option.id === value.id}
            onChange={(event, newValue) => setVolunteer(newValue)}
          />
        </div>
      </div>
      <form onSubmit={formSubmissionHander} className="component-container">
        <div className="TextFields-container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="firstName"
                    label={
                      volunteer.firstName
                        ? `${volunteer.firstName}`
                        : "First name"
                    }
                    variant="outlined"
                    className=""
                    disabled
                    helperText={volunteer ? "First name" : ""}
                    size="small"
                    margin="dense"
                    value={firstName}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="lastName"
                    label={
                      volunteer.lastName ? `${volunteer.lastName}` : "Last name"
                    }
                    variant="outlined"
                    disabled
                    helperText={volunteer ? "Last name" : ""}
                    size="small"
                    margin="dense"
                    value={lastName}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="city"
                    label={volunteer.city ? `${volunteer.city}` : "City"}
                    variant="outlined"
                    disabled
                    helperText={volunteer ? "City" : ""}
                    size="small"
                    margin="dense"
                    value={city}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="birthDate"
                    label={
                      volunteer.birthDate ? `${volunteer.birthDate}` : "DoB"
                    }
                    variant="outlined"
                    disabled
                    helperText={volunteer ? "Date of birth" : ""}
                    size="small"
                    margin="dense"
                    value={dob}
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <div className="household-container">
                    <span className="household-span">{householdMessage}</span>
                    <FormGroup>{householdContent}</FormGroup>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <div className="household-container">
                    <LocalizationProvider dateAdapter={DateAdapter}>
                      <DesktopDatePicker
                        label="Date"
                        inputFormat="MM/DD/yyyy"
                        value={date}
                        onChange={dateChangeHandler}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>

          <div className="datepicker-container"></div>
          <div className="radio-form-container">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Item>
                    <FormControl margin="normal" fullWidth="false">
                      <FormLabel id="demo-radio-buttons-group-label">
                        Is this client a volunteer?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={false}
                        name="radio-buttons-group"
                        row
                        style={{ width: "auto", margin: "auto" }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <FormControl margin="normal" fullWidth="false">
                      <FormLabel id="demo-radio-buttons-group-label">
                        Is this client currently homeless?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={false}
                        name="radio-buttons-group"
                        row
                        style={{ width: "auto", margin: "auto" }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <FormControl margin="normal" fullWidth="false">
                      <FormLabel id="demo-radio-buttons-group-label">
                        Is this client currently active?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={true}
                        name="radio-buttons-group"
                        row
                        style={{ width: "auto", margin: "auto" }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <FormControl margin="normal" fullWidth="false">
                      <FormLabel id="demo-radio-buttons-group-label">
                        Does this client require home delivery?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={false}
                        name="radio-buttons-group"
                        row
                        style={{ width: "auto", margin: "auto" }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <FormControl margin="normal" fullWidth="false">
                      <FormLabel id="demo-radio-buttons-group-label">
                        Is this client affiliated with a non-profit
                        organization?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={false}
                        name="radio-buttons-group"
                        row
                        style={{ width: "auto", margin: "auto" }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <FormControl margin="normal" fullWidth="false">
                      <FormLabel id="demo-radio-buttons-group-label">
                        Is this client under the age of 14?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={false}
                        name="radio-buttons-group"
                        row
                        style={{ width: "auto", margin: "auto" }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <FormControl margin="normal" fullWidth="false">
                      <FormLabel id="demo-radio-buttons-group-label">
                        Is this client a driver back-up driver?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={false}
                        name="radio-buttons-group"
                        row
                        style={{ width: "auto", margin: "auto" }}
                      >
                        <FormControlLabel
                          value="Driver"
                          control={<Radio />}
                          label="Driver"
                        />
                        <FormControlLabel
                          value="Back-Up"
                          control={<Radio />}
                          label="Back-up Driver"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="Neither"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <FormControl margin="normal" fullWidth="false">
                      <FormLabel id="demo-radio-buttons-group-label">
                        Is this client a Preston Food Bank administrator?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={false}
                        name="radio-buttons-group"
                        row
                        style={{ width: "auto", margin: "auto" }}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Household;
