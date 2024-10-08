WITH player_scores AS (
    -- Step 1: Calculate the total score for each player
    SELECT
        p.player_id,
        p.group_id,
        COALESCE(SUM(CASE WHEN m.first_player = p.player_id THEN m.first_score ELSE 0 END), 0) +
        COALESCE(SUM(CASE WHEN m.second_player = p.player_id THEN m.second_score ELSE 0 END), 0) AS total_score
    FROM
        players p
    LEFT JOIN
        matches m ON p.player_id = m.first_player OR p.player_id = m.second_player
    GROUP BY
        p.player_id, p.group_id
),
group_winners AS (
    -- Step 2: Find the player with the maximum score in each group
    SELECT
        ps.group_id,
        ps.player_id AS winner_id,
        ps.total_score
    FROM
        player_scores ps
    WHERE
        (ps.group_id, ps.total_score) IN (
            SELECT
                ps2.group_id,
                MAX(ps2.total_score)
            FROM
                player_scores ps2
            GROUP BY
                ps2.group_id
        )
)
-- Step 3: Select the winner with the lowest player_id in case of ties and order by group_id
SELECT
    gw.group_id,
    MIN(gw.winner_id) AS winner_id
FROM
    group_winners gw
GROUP BY
    gw.group_id
ORDER BY
    gw.group_id;