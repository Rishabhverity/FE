const Account = require('../models/account');

const createAccount = async (req, res) => {
    try {
        const account = new Account(req.body);
        await account.save();
        res.status(201).send(account);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find({});
        res.status(200).send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateAccount = async (req, res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!account) {
            return res.status(404).send();
        }
        res.status(200).send(account);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteAccount = async (req, res) => {
    try {
        const account = await Account.findByIdAndDelete(req.params.id);
        if (!account) {
            return res.status(404).send();
        }
        res.status(200).send(account);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {createAccount, getAccounts, updateAccount, deleteAccount}