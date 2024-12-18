# Status Types

Listings in Arcpay go through various statuses to indicate their lifecycle and availability. These statuses help track the state of a listing from creation to completion or removal.

<style>
.status-pending {
  color: purple;
}
.status-active {
  color: green;
}
.status-cancelled {
  color: red;
}
.status-closed {
  color: purple;
}
</style>

## <span class="status-pending">Pending</span>
The listing is created but is awaiting validation and indexing by the Arcpay indexer. It is not yet accessible via SDK or direct link.

## <span class="status-active">Active</span>
The listing has been indexed and is now accessible for purchase or bidding through SDK or direct link. It remains active until sold, expired, or manually closed.

## <span class="status-cancelled">Cancel</span>
The listing has been manually removed by its creator. It is no longer accessible for transactions but remains in the system as a reference.

## <span class="status-closed">Closed</span>
The listing has ended due to a successful transaction, expiration, or auction completion. It is finalized and cannot be reactivated.
