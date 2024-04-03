
import Vetenary from "../models/VetenarySchema.js";

//Update Vetenary
export const updateVetenary = async (req, res) => {
    const id = req.params.id;

    try {
        
        const updatedVetenary = await Vetenary.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        
        res
            .status(200)
            .json({
                success: true,
                message: "Vetenary updated successfully",
                data: updatedVetenary,
            });

    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: "Failed to update Vetenary, Try again later!",
                error: error.message
            });
    }
};

//Delete Vetenary
export const deleteVetenary = async (req, res) => {
    const id = req.params.id;

    try {
        
        await Vetenary.findByIdAndDelete(id);
        
        res
            .status(200)
            .json({
                success: true,
                message: "Vetenary deleted successfully",
            });

    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "Failed to delete Vetenary, Try again later!",
            });
    }
};

//Get single Vetenary
export const getSingleVetenary = async (req, res) => {
    const id = req.params.id;

    try {
        
        const vetenary = await Vetenary.findById(id).populate("reviews").select("-password");
        
        res
            .status(200)
            .json({
                success: true,
                message: "Vetenary found successfully",
                data: vetenary,
            });

    } catch (err) {
        res
            .status(404)
            .json({
                success: false,
                message: "Failed to find vetenary, Try again later!",
            });
    }
};

//Get all vetenary
export const getAllVetenary = async (req, res) => {

    try {

        const { query } = req.query;
        let vetenaries;

        if (query) {
            vetenaries = await Vetenary.find({
                isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
            }).select("-password");
        } else {
            
            vetenaries = await Vetenary.find({isApproved: "approved"}).select("-password");
            
        }
        
        res
            .status(200)
            .json({
                success: true,
                message: "Vetenaries found successfully",
                data: vetenaries,
            });

    } catch (err) {
        res
            .status(404)
            .json({
                success: false,
                message: "Failed to find Vetenaries, Try again later!"
            });
    }
};

export const getVetenaryProfile = async (req, res) => {
    const vetenaryId = req.query.email;

    console.log(vetenaryId);

    try {
        console.log("Try function learning")

        const vetenary = await Vetenary.findOne({email: vetenaryId});

        //console.log(vetenary, "vetenary");

        if (!vetenary) {
            return res.status(404).json({
                success: false,
                message: "Vetenary not found",
            });
        }

        const { password, ...rest } = vetenary._doc;

        //console.log(rest, "rest");
       
        const user = await Vetenary.findOne({ email: vetenaryId });

        //console.log(user, "user");

        const appointments = await Booking.find({vetenary: user._id});

        console.log(appointments, "appointments");

        res.status(200).json({
            success: true,
            message: "Profile Info found successfully",
            data: { ...rest, appointments },
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to get Profile Info, Try again later!",
        });
    }
};