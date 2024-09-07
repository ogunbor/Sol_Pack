use anchor_lang::prelude::*;

#[error_code]
pub enum VaultError {
    #[msg("The vault has not yet expired")]
    VaultNotYetExpired,
    #[msg("Invalid withdrawal amount")]
    InvalidWithdrawalAmount,
    #[msg("You are not authorized to do this")]
    Unauthorized,
}
