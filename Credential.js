class Credential {
    constructor(
        email,
        name,
        points,
        today,
        edge,
        mobile,
        pc,
        max_edge = 12,
        max_mobile = 60,
        max_pc = 90,
        edge_earning = 3,
        mobile_earning = 3,
        pc_earning = 3,
        level = 2,
        level_progress = 0,
        level_max = 500,
        bing_cookies,
        rewards_cookies,
        activity_count = 0,
        highlights,
        lastUpdated = 0,
    ) {
        this.email = email;
        this.name = name;
        this.points = points;
        this.today = today;
        this.edge = edge;
        this.mobile = mobile;
        this.pc = pc;
        this.max_edge = max_edge;
        this.max_mobile = max_mobile;
        this.max_pc = max_pc;
        this.edge_earning = edge_earning;
        this.mobile_earning = mobile_earning;
        this.pc_earning = pc_earning;
        this.level = level;
        this.level_progress = level_progress;
        this.level_max = level_max;
        this.bing_cookies = bing_cookies;
        this.rewards_cookies = rewards_cookies;
        this.activity_count = activity_count;
        this.highlights = highlights;
        this.lastUpdated = lastUpdated;
        this.isImported=true
    }

    json() {
        return JSON.stringify({...this});
    }
}