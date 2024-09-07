use anchor_lang::prelude::*;

declare_id!("3bUMiDBPPenwzWm8uCQZBchTGckRNCEUBC2tzd1aFBxx");

#[program]
pub mod sol_trust {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
