from web3 import Web3
from django.conf import settings

# Connect to Ethereum node (Infura, Alchemy, or local node)
infura_url = settings.INFURA_URL  # Replace with your actual URL
web3 = Web3(Web3.HTTPProvider(infura_url))

def get_wallet_balance(address: str) -> float:
    """
    Fetches the balance of an Ethereum wallet.
    :param address: The Ethereum wallet address to check.
    :return: Balance in Ether.
    """
    if not web3.is_connected():
        raise ConnectionError("Failed to connect to the Ethereum network.")

    if not web3.is_address(address):
        raise ValueError("Invalid Ethereum address.")

    balance_wei = web3.eth.get_balance(address)
    balance_ether = web3.from_wei(balance_wei, 'ether')
    return balance_ether