module counter_addr::counter {
    use std::signer;
    use aptos_framework::account;

    struct Counter has key, drop, store {
        value: u64,
        user: address,
    }

    public entry fun create_counter(account: &signer) {
        let user_address = signer::address_of(account);
        move_to(account, Counter { value: 0, user: user_address });
    }

    public entry fun increment_counter(account: &signer) acquires Counter {
        let counter = borrow_global_mut<Counter>(signer::address_of(account));
        counter.value = counter.value + 1;
    }

    #[test(admin = @0x123)]
    public entry fun test_flow(admin: signer) acquires Counter {
        // creates an admin @todolist_addr account for test
        account::create_account_for_test(signer::address_of(&admin));
        // initialize contract with admin account
        create_counter(&admin);
        increment_counter(&admin);

        let counter = borrow_global<Counter>(signer::address_of(&admin));
        assert!(counter.value == 1, 5);

    }

}