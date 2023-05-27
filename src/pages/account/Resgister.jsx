import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import Eye from "../../assets/images/register/eye.png";
import Invisible from "../../assets/images/register/invisible.png"
import { Upload } from "@mui/icons-material";

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [telephone, setTelephon] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [country, setCountry] = useState('')
    const [profileImage, setProfileImage] = useState();
    const [imagePreview, setImagePreview] = useState()

    const [formStep, setFormStep] = useState(1)


    const imageFileRef = useRef()

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProfileImage(file);
    };

    const handleClickEditImage = () => {
        imageFileRef.current.click()
    }

    const handleChangeEditImage = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setProfileImage(file)
                setImagePreview(e.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('telephone', '+62' + telephone);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('province', province);
        formData.append('country', country);
        formData.append('profile_image', profileImage);

        fetch('https://cors-anywhere.herokuapp.com/http://13.212.226.116:8000/api/register', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Box sx={{
            // width: "100vw",
            minHeight: "100vh",
            padding: { sm: "40px 0", xs: "0" },
            backgroundColor: { sm: "rgb(34,193,195)", xs: "#094067" },
            background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,174,0,1) 100%);",
            display: "flex",
            alignItems: "center"
        }}>
            <Box mx={"auto"} component={"form"} onSubmit={handleSubmit} sx={{
                backgroundColor: "white",
                width: "fit-content",
                height: "fit-content",
                padding: { sm: "20px 70px 80px 70px", xs: "20px 0px" },
                borderRadius: "20px",
                maxWidth: "450px",
                boxShadow: "10px 10px 24px 6px rgba(0,0,0,0.31);"
            }}>
                <Typography variant="h1" sx={{
                    fontSize: { sm: "48px", xs: "40px" },
                    textAlign: "center",
                    margin: { sm: "50px", xs: "30px" },
                    fontWeight: "bold",
                    fontFamily: "Poppins"
                }} >Register</Typography>
                {formStep == 1 ?
                    <Box>
                        <Box>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>Username</Typography>
                            <TextField
                                required
                                value={username}
                                placeholder="test@test.com"
                                onChange={(e) => setUsername(e.target.value)}
                                InputProps={{
                                    sx: {
                                        backgroundColor: "white",
                                        width: { sm: "450px", xs: "320px" },
                                        marginBottom: "30px",
                                    }
                                }}
                                type="email"
                                id="Username" />
                        </Box>
                        <Box mb={3}>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>Password</Typography>
                            <TextField
                                required
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    sx: {
                                        backgroundColor: "white", width: { sm: "450px", xs: "320px" },
                                        marginBottom: "5px"
                                    },
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                <img width="32xpx" src={showPassword ? Invisible : Eye} alt="" />
                                            </IconButton>
                                        </InputAdornment>
                                }}
                                id="Password" />
                        </Box>
                    </Box>
                    :
                    <Box>
                        <Box mb={3}>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>Name</Typography>
                            <Box sx={{ display: "flex", gap: "10px" }}>
                                <TextField
                                    required
                                    value={firstName}
                                    placeholder="First Name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    InputProps={{
                                        sx: {
                                            backgroundColor: "white",
                                            width: { sm: "220px", xs: "155px" },
                                            marginBottom: "5px",
                                        }
                                    }}
                                    id="FirstName" />
                                <TextField
                                    required
                                    value={lastName}
                                    placeholder="Last Name"
                                    onChange={(e) => setLastName(e.target.value)}
                                    InputProps={{
                                        sx: {
                                            backgroundColor: "white",
                                            width: { sm: "220px", xs: "155px" },
                                            marginBottom: "5px",
                                        }
                                    }}
                                    id="LastName" />
                            </Box>
                        </Box>

                        <Box mb={3}>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>Telephone</Typography>
                            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <Typography fontSize={"24px"}>+62</Typography>
                                <TextField
                                    required
                                    value={telephone}
                                    placeholder="Phone Number"
                                    onChange={(e) => setTelephon(e.target.value)}
                                    InputProps={{
                                        sx: {
                                            backgroundColor: "white",
                                            width: { sm: "400px", xs: "270px" },
                                            marginBottom: "5px",
                                        }
                                    }}
                                    id="Telephone" />
                            </Box>
                        </Box>

                        <Box mb={3}>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>Profile Image</Typography>
                            {!imagePreview ? (
                                <Box
                                    onClick={handleClickEditImage}
                                    sx={{
                                        width: "98%",
                                        height: 150,
                                        borderRadius: 2,
                                        border: "4px dashed rgba(0,0,0,0.2)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    <Box>

                                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                                            <Upload sx={{ fontSize: 80, color: "gray" }} />
                                            <br />
                                            Unggah foto profil
                                        </Typography>
                                    </Box>
                                </Box>
                            ) : (
                                <Box sx={{
                                    width: "98%",
                                    height: 150,
                                    borderRadius: 2,
                                    border: "4px dashed rgba(0,0,0,0.2)",
                                    objectFit: "contain"
                                }} component={"img"} src={imagePreview}></Box>
                            )}
                            <input ref={imageFileRef} type="file" style={{ display: "none" }} onChange={handleChangeEditImage} />
                        </Box>

                        <Box mb={3}>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>Address</Typography>
                            <TextField
                                required
                                value={address}
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}
                                InputProps={{
                                    sx: {
                                        backgroundColor: "white",
                                        width: { sm: "450px", xs: "320px" },
                                        marginBottom: "5px",
                                    }
                                }}
                                id="Address" />
                        </Box>

                        <Box mb={3}>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>City</Typography>
                            <TextField
                                required
                                value={city}
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}
                                InputProps={{
                                    sx: {
                                        backgroundColor: "white",
                                        width: { sm: "450px", xs: "320px" },
                                        marginBottom: "5px",
                                    }
                                }}
                                id="City" />
                        </Box>

                        <Box mb={3}>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>Province</Typography>
                            <TextField
                                required
                                value={province}
                                placeholder="Province"
                                onChange={(e) => setProvince(e.target.value)}
                                InputProps={{
                                    sx: {
                                        backgroundColor: "white",
                                        width: { sm: "450px", xs: "320px" },
                                        marginBottom: "5px",
                                    }
                                }}
                                id="Province" />
                        </Box>

                        <Box mb={3}>
                            <Typography component={"p"} variant="p" sx={{ marginBottom: "15px" }}>Country</Typography>
                            <TextField
                                required
                                value={country}
                                placeholder="Country"
                                onChange={(e) => setCountry(e.target.value)}
                                InputProps={{
                                    sx: {
                                        backgroundColor: "white",
                                        width: { sm: "450px", xs: "320px" },
                                        marginBottom: "5px",
                                    }
                                }}
                                id="Country" />
                        </Box>
                    </Box>
                }

                <Box sx={{
                    display: "flex",
                    justifyContent: "right",
                    gap: "5px"
                }}>
                    <Button onClick={() => setFormStep(1)} variant="contained" disabled={formStep == 1 ? true : false}>Previous</Button>
                    <Button onClick={() => setFormStep(2)} variant="contained" disabled={formStep == 1 ? false : true}>Next</Button>
                </Box>

                {formStep != 1 ? <Box sx={{ textAlign: "center" }} mt={"30px"}>
                    <Button type="submit" variant="contained" sx={{
                        borderRadius: "40px",
                        padding: "15px 60px",
                        fontSize: "16px"
                    }}>Register</Button>
                </Box> : <></>}
            </Box>
        </Box>
    );
}

export default Register;