import Quotation from '../models/Quotation.js';

export const getQuotations = async (_req, res, next) => {
  try {
    const quotations = await Quotation.find().sort({ createdAt: -1 });
    res.status(200).json(quotations);
  } catch (error) {
    next(error);
  }
};

export const createQuotation = async (req, res, next) => {
  try {
    const quotation = await Quotation.create(req.body);
    res.status(201).json(quotation);
  } catch (error) {
    next(error);
  }
};
