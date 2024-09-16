// SPDX-Licence-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract VNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("A Visual Decentralization", "AVD") {}

    function minNFT(
        address recipent,
        string memory _tokenURI
    ) public onlyOwner returns (uint) {
        _tokenIds.increment();
        uint newId = _tokenIds.current();

        _mint(recipent, newId);
        _setTokenURI(newId, _tokenURI);
        return newId;
    }
}
