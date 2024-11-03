import bcrypt from 'bcrypt'

export const hashPassword = async (password) =>{
    try {
        return await bcrypt.hash(password,12);
    } catch (error) {
        throw error;
    }
}

export const comparePassword = async (hashedPassword,password) => {
    try {
        return await bcrypt.compare(hashedPassword,password);
    } catch (error) {
        throw error;
    }
}
