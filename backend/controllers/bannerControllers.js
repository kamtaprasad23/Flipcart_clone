import bannerSlider from "../models/bannerSlider.js";

export const getBanners = async (req, res) => {
  try {
    const banners = await bannerSlider.find();
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch banners." });
  }
};

export const createBanners = async (req, res) => {
  try {
    const newBanner = await bannerSlider.create(req.body);
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(500).json({ message: "Failed to create banner.", error });
  }
};